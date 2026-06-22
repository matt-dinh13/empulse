---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - List of communication"
domain: "Analysis Model"
element_id: 1736456
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ System

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - List of communication

## 📝 Notes

Search input drop-down field for filtering the communication records displayed in the Communication records grid based on their source system (i.e. System column).

See the 07.022 Show list of communication for application / 07.020 Show list of communication use case for more details, how the communication records are being retrieved for each possible option.

Available values:

	
- 'All recent' (COM_AllRecent)
- Selected by default.
- Applicable records from all the available systems / systems selected via the related checkboxes within the actual Filter panel (applicable) are loaded.
- Applicable records from the selected systems (see the related checkboxes within the actual Filter panel) are loaded.
  Note: Applicable records from all the available systems are loaded, when the related checkboxes are not visible.


	
- 'From BSL' (COM_FromBSL)
- Available only if global parameter CommHistFilterBSL = TRUE AND parameter (parameters.properties) useClientCenterREST = FALSE.
- Only the records from BSL system are loaded.


	
- 'From CLC' (COM_FromCLC)
- Available only if global parameter CommHistFilterCLC = TRUE.
- Only the records from CLC system are loaded.


	
- 'From CCH' (COM_FromCCH)
- Available only if global parameter CommHistFilterCCH = TRUE.
- Only the records from CCH system are loaded.


Localization code:
GEN_SystemName

## 📊 Appears In (1 diagrams)

- Custom: Tab - List of communication
