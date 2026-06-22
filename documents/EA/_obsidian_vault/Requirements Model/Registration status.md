---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-19215 (CLM-5374) Registration tab with Registration ticket support"
domain: "Requirements Model"
element_id: 1868365
diagrams: 4
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ Registration status

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-19215 (CLM-5374) Registration tab with Registration ticket support

## 📝 Notes

If global parameter activateRegistrationTickets = TRUE, then system fills this textfield with TicketInfo.status from call to TCK REST API ticketInfos endpoint else it shows status of contract registration by rule:

	
- If Registration Status = 'RR'

Read only
Text is visible if the contract exists in the Contract Registration Queue in active processing (Archive = 0)

Localization code: CON_Registration_Task_Status

## 📊 Appears In (4 diagrams)

- Custom: CBL-19215 (CLM-5374) Registration tab with Registration ticket support
- Custom: CBL-6256 (CLM-2060) Select all documents for registration
- Custom: Contract registration
- Custom: REQ #1 - Add radio buttons Registration and Mistake investigation
