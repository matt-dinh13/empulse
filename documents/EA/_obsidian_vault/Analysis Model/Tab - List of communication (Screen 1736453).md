---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - List of communication"
domain: "Analysis Model"
element_id: 1736453
diagrams: 1
connections: 2
tags:
  - screen
  - analysis-model
---

# 📱 Tab - List of communication

> **Type**: Screen
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - List of communication

## 📝 Notes

Tab containing the detailed information about all communication with the client, that took place in relation with respective application.

Based on the value of the parameter (parameters.properties) useClientCenterREST, this tab is controlled by one of the following use cases:

	
- If TRUE, then the 07.022 Show list of communication for application use case is activated.
	
- Otherwise the 07.020 Show list of communication use case is activated instead.


Localization code:
COM_List

## 🔗 Connections (2)

- → Realisation: [[07.022 Show list of communication for application (UseCase 1736405)]]
- → Realisation: [[{MOD}07.020 Show list of communication]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - List of communication
