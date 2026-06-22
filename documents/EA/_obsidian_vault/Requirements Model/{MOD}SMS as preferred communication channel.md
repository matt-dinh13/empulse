---
type: GUIElement
stereotype: "checkbox"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF"
domain: "Requirements Model"
element_id: 1691603
diagrams: 3
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ {MOD}SMS as preferred communication channel

> **Type**: GUIElement · **Stereotype**: «checkbox»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF

## 📝 Notes

Source: 
{DEL}PartyWS.customerPersonGetResponse->partyRole->customerPersonRelationShip.preferredCallYn{/DEL}
{ADD CLM-4749}GetCustomerDataResponse -> data -> communicationChannels -> PREF_COMMUNICATION.channelType{/ADD}


Always read only.

Visibility: only if Safe guaranty flag=TRUE

Localization: CLI_PreferredCall

## 📊 Appears In (3 diagrams)

- Custom: Overview
- Custom: Safe guaranty
- Logical: CBL-16452 (CLM-4749) Use preferred comm from PIF communication channels
