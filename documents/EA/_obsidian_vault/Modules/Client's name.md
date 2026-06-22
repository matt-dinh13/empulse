---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface"
domain: "Modules"
element_id: 1880313
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Client's name

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface

## 📝 Notes

Full name of a client who paid the current payment.
{ADD PAYM-3942}
Obtained from PIF using REST API - GET customer via CUID using PARTY_DATA projection. Client's full name is displayed according to Country rules for displaying client's full name. 
CUID for this query is obtained from:

	
- currently paired contract or (if not paired)
	
- provided contract number.

If none of these are available, client full name is not displayed.
In case of PIF timeout, client's name is also not displayed.
{/ADD}

Editable: No
Localization code: CLI_Name

## 📊 Appears In (1 diagrams)

- Custom: Show incoming payment detail panel
