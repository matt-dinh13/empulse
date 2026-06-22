---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/List of communication"
domain: "Analysis Model"
element_id: 1714131
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ System source

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/List of communication

## 📝 Notes

Selection of source of communication records:

	
- All recent (COM_AllRecent)- load records from {MOD CLM-2831}selected{/MOD} systems,  use the COMM_HISTORY_LENGTH condition


	
- From BSL (COM_FromBSL) - load records from BSL only, use entered Channel+Type value as filter condition. Visibility is defined by system property 'CommHistFilterBSL'


	
- From CCH (COM_FromCCH) - load records from CCH only, use entered Channel+Type value as filter condition. Visibility is defined by system property 'CommHistFilterCCH'. This property can be set only if CommunicationWS supporting CCH is used (it means BSLCommunicationHistoryService_v2 and higher).


By default All recent is selected when screen is shown.

Localization code:
COM_System

## 📊 Appears In (1 diagrams)

- Custom: List of communication
